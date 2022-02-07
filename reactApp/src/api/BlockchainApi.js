
import Decentragram from '../abis/Decentragram.json'
import * as Constants from '../utilities/Constants';
import Web3 from 'web3';


const mainContract = new (new Web3(window.ethereum)).eth.Contract(Decentragram.abi, Constants.DecentragramContractAddress)






export function getPostTippedSubscriptionEvent() {
    return mainContract.events.PostTipped()
}


export function getPostCreatedSubscriptionEvent() {
    return mainContract.events.PostCreated()
}


export async function getPostById(id) {
    const post = await mainContract.methods.posts(id).call()
    if (post) {
        return (post)
    }
    else {
        return ("Error fetching post")
    }

};

export async function getPostCount() {
    var postCount = await mainContract.methods.postCount().call()
    console.log(postCount)
    if (postCount) {
        return (postCount)
    }
    else {
        return ("Error fetching postCount")
    }
};

export async function createContractPost(imageHash, description, account) {

    return new Promise((resolve, reject) => {
        mainContract.methods.createPost(imageHash, description).send({ from: account })
            .on('transactionHash', (transactionHash) => {
                console.log('Transaction sent with hash: ', transactionHash)
                resolve(transactionHash)
            })
            .on('error', (error) => {
                reject(error)
            })
    })



}

export async function tipPostOwner(id, tipAmount, account) {
    var tipResult = mainContract.methods.tipPostOwner(id).send({ from: account, value: tipAmount })

    return tipResult
}
