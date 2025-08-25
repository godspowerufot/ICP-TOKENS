/* eslint-disable @typescript-eslint/no-explicit-any */
// PlugSendIcpButton.tsx
import React, { useState } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ic?: any; // Plug injects window.ic
  }
}

type SendResult = { height?: number } | { error: string };

export default function PlugSendIcpButton() {
  const [connected, setConnected] = useState(false);
  const [principal, setPrincipal] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  // Convert ICP decimal (e.g. 1.25) to e8s (BigInt)
  const icpToE8s = (icp: number) => BigInt(Math.round(icp * 1e8));

  // Connect to Plug
  const connectPlug = async () => {
    if (!window.ic || !window.ic.plug) {
      setStatus(
        "Plug wallet not installed. Install from https://plugwallet.ooo/"
      );
      return;
    }
    try {
      // requestConnect may accept params, but the simple call is usually fine
      await window.ic.plug.requestConnect();
      const principal = await window.ic.plug.agent.getPrincipal();
      setPrincipal(String(principal));
      setConnected(true);
      setStatus("Connected: " + String(principal).slice(0, 8) + "...");
    } catch (err: any) {
      setStatus("Connection rejected or failed: " + (err?.message ?? err));
    }
  };

  // Send ICP using Plug's requestTransfer
  const sendIcp = async (toPrincipal: string, amountIcp: number) => {
    setLoading(true);
    setStatus(null);

    if (!window.ic || !window.ic.plug) {
      setStatus("Plug provider not found.");
      setLoading(false);
      return;
    }

    const params = {
      to: toPrincipal, // recipient principal or account id string accepted by Plug
      amount: Number(icpToE8s(amountIcp)), // amount in e8s (number or bigint depending on runtime)
      opts: {
        // optional: fee, memo, from_subaccount, created_at_time
        // fee?: number,
        // memo?: "payment-for-order-123",
      },
    };

    try {
      // This opens the Plug confirmation popup for the user to accept
      const result: SendResult = await window.ic.plug.requestTransfer(params);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ("height" in (result as any)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setStatus(`Transfer sent. Ledger height: ${(result as any).height}`);
      } else if ("error" in result) {
        setStatus("Send failed: " + (result as any).error);
      } else {
        setStatus("Unknown response: " + JSON.stringify(result));
      }
    } catch (err: any) {
      setStatus("Transfer error: " + (err?.message ?? String(err)));
    } finally {
      setLoading(false);
    }
  };

  // Example UI
  return (
    <div
      style={{
        maxWidth: 520,
        padding: 16,
        border: "1px solid #eee",
        borderRadius: 8,
      }}
    >
      <h3>Send ICP (via Plug)</h3>

      {!connected ? (
        <button onClick={connectPlug}>Connect Plug Wallet</button>
      ) : (
        <div style={{ marginBottom: 12 }}>
          <div>Connected as: {principal}</div>
        </div>
      )}

      <div style={{ marginTop: 12 }}>
        <label>
          Recipient Principal / Account ID
          <input
            id="to"
            defaultValue=""
            placeholder="xxxx-xxxxx-..."
            style={{ width: "100%" }}
          />
        </label>
      </div>

      <div style={{ marginTop: 8 }}>
        <label>
          Amount (ICP)
          <input
            id="amount"
            defaultValue="0.1"
            type="number"
            step="0.00000001"
            style={{ width: "100%" }}
          />
        </label>
      </div>

      <div style={{ marginTop: 12 }}>
        <button
          disabled={!connected || loading}
          onClick={() => {
            const to = (
              document.getElementById("to") as HTMLInputElement
            ).value.trim();
            const amt = parseFloat(
              (document.getElementById("amount") as HTMLInputElement).value ||
                "0"
            );
            if (!to)
              return setStatus(
                "Please enter a recipient principal/account id."
              );
            if (!amt || amt <= 0) return setStatus("Enter a valid amount > 0.");
            sendIcp(to, amt);
          }}
        >
          {loading ? "Sending..." : "Send ICP"}
        </button>
      </div>

      {status && <div style={{ marginTop: 12, color: "#333" }}>{status}</div>}
      <div style={{ marginTop: 8, fontSize: 12, color: "#666" }}>
        Note: amounts are converted to e8s (1 ICP = 100,000,000 e8s). Plug will
        show a confirmation popup. See Plug docs for requestTransfer details.
      </div>
    </div>
  );
}
