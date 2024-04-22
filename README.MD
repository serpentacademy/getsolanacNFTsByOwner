<a href="https://ascendance.dev"> <h1>By ascendance.dev</h1></a>
<p>
Get Solana cNFTs by Owner PubicKey using Typescript, Bubblegum, Metaplex
<p>

<p>This JavaScript code demonstrates how to retrieve a list of NFTs owned by a specific wallet address using the Metaplex API. Here are the key concepts:</p>

<p>Module Imports: The script begins by importing necessary modules from the @metaplex-foundation/umi and related packages. These modules are essential for interacting with Solana's blockchain to manage and query digital assets.</p>
<p>Environment Setup: It uses dotenv to manage environment variables, ensuring sensitive information like API endpoints remains secure. The ENDPOINT variable is then used to configure the network connection.</p>
<p>Fetching NFTs: The getNFTsByOwner function initializes a UMI (Unified Metaplex Interface) instance with the specified endpoint and integrates the Digital Asset Standard (DAS) API. It then queries for NFTs owned by a specified publicKey using the getAssetsByOwner method. This method is configured to fetch a limited number of assets (up to 10) and logs each asset's ID and the total number of assets found.</p>
