
import { getPostCount, getPostById, createContractPost } from '../../api/BlockchainApi';
import { uploadResource } from '../../api/IPFSApi';

var latestLoadedPost = 0;

export async function loadPosts() {

    var postCount = await getPostCount()
    if (!postCount) {
        return ("Error getting postCount")
    }

    postCount = parseInt(postCount, 10)
    var postArray = []

    if (latestLoadedPost === 1) {
        console.log("There are no more posts available")
        return []
    }
    else if (postCount === 0) {
        console.log("There are no posts to load")
        return []
    }
    else if (latestLoadedPost === 0) {
        console.log("Loading posts form " + postCount + " to " + (postCount - 4).toString())
        latestLoadedPost = postCount + 1
    }
    else {
        console.log("Loading posts form " + (latestLoadedPost - 1).toString() + " to " + (latestLoadedPost - 5).toString())
    }

    var postsSuccesfullyLoaded = 0
    for (var i = latestLoadedPost - 1; i > 0 && i > latestLoadedPost - 6; i--) {
        const post = await getPostById(i)
        if (!post) {
            return Error("Error getting post info")
        }
        postArray.push(post)
        postsSuccesfullyLoaded++
    }

    latestLoadedPost = latestLoadedPost - postsSuccesfullyLoaded
    return (postArray)
}


export async function createPost(account, imageBuffer, description) {

    var imageHash = await uploadResource(imageBuffer)

    if (imageHash) {
        console.log("var result = await createContractPost(imageHash, description, account)")
        return createContractPost(imageHash, description, account)
    }
    else {
        return imageHash
    }
}





// latestLoadedPost = 0

// constructor(updateState, onPostLoaded, onNewPostCreated) {
//     this.updateState = updateState
//     this.onPostLoaded = onPostLoaded
//     this.onNewPostCreated = onNewPostCreated
//     this.setPostCreatedEventListener(this.onNewPostCreated)
// }

