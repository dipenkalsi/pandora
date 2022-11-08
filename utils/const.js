import { clusterApiUrl,PublicKey } from "@solana/web3.js";
import pandora from './pandora.json'
export const SOLANA_HOST=clusterApiUrl('devnet')
export const STABLE_POOL_PROGRAM_ID=new PublicKey("42mkdQDc1vuJ5vyRASfVTKh3zJb8H6hpmvExMPQqKEhj")
export const STABLE_POOL_IDL= pandora