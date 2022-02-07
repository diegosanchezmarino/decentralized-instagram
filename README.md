# InstaDapp
InstaDapp Instagram decentralized version

    - Connect with Metamask
    - Share .jpg, .jpeg, .png, .bmp
    - Content is uploaded to IPFS
    - Receive tips for the content you uploaded

To test locally:

//Run virtual network
ganache-cli -p 8545 -i 5777 -b

// Deploy contracts to network:
truffle migrate --reset --network develop    

//Replace "Constants.js" contract address value with deployed one



Check out a live running version deployed to ropsten at:

https://diegosanchezmarino.github.io/InstaDapp/
