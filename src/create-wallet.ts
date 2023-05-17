/**
 * Author: haoqian
 * Twitter: @huhaoqain
 * wechat: jazzshow_
 * Date: 2023/05/17
 */
import { Ed25519Keypair } from "@mysten/sui.js";
import fs from "fs";

type SuiAccount = {
  address: string;
  privateKey: string;
  toAddress: string;
};
async function generateAccounts() {
  const suiAccounts: Array<SuiAccount> = [];
  let i = 0;
  while (i < 10) {
    // Your existing code
    const keypair = Ed25519Keypair.generate();
    const key = keypair.export();
    // Convert Base64 encoded private key to Bytes
    const privateKeyBytes = Buffer.from(key.privateKey, "base64");
    // Convert bytes to Hex
    const privateKeyHex = privateKeyBytes.toString("hex");
    const address = keypair.getPublicKey().toSuiAddress();
    const suiAccount: SuiAccount = {
      address: address,
      privateKey: privateKeyHex,
      toAddress: "",
    };
    suiAccounts.push(suiAccount);
    i++;
  }
  console.log(suiAccounts);
  fs.writeFileSync(
    "constants/sui-addresses.json",
    JSON.stringify(suiAccounts),
    "utf-8"
  );
}
generateAccounts();
