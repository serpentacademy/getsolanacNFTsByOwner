import { publicKey } from '@metaplex-foundation/umi';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { dasApi } from '@metaplex-foundation/digital-asset-standard-api';
import * as dotenv from 'dotenv'
dotenv.config()

async function getNFTsByOwner(){
    const endpoint = process.env.ENDPOINT?process.env.ENDPOINT:"";

    const umi = createUmi(endpoint.toString()).use(dasApi());
    const owner = publicKey('9BqddBZnSMcgzwK1q85evfTSJEpKwTCVNtfRQ3cw6dZ');
    
    const assets = await umi.rpc.getAssetsByOwner({
        owner,
        limit: 10
    });
    console.log(assets.items.length > 0);
    console.log(assets.items)

    for (var i=0; i< assets.items.length; i++){
        console.log(assets.items[i].id)

    }
}

getNFTsByOwner()
