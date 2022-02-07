//Declare IPFS
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values


export async function uploadResource(resource) {

    console.log("Submitting file to ipfs...")
    var result = await ipfs.add(resource)

    return result[0].hash
    // await ipfs.add(resource, (error, result) => {


    //     if (error) {
    //         console.error(error)
    //         // return error
    //         console.log('Error uploading to IPFS', result)
    //         return error
    //     }

    //     console.log('Succesfully uploaded to IPFS', result)
    //     return (result[0].hash)

    // })



}

