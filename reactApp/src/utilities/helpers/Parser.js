export function parseNewPostEvent(newPostEvent) {
    console.log("New post created event:", newPostEvent)
    const newPost = {
        author: newPostEvent.returnValues.author,
        description: newPostEvent.returnValues.description,
        hash: newPostEvent.returnValues.hash,
        id: newPostEvent.returnValues.id,
        isVideo: newPostEvent.returnValues.isVideo,
        tipAmount: newPostEvent.returnValues.tipAmount
    }

    return newPost

}

export function parseNewPostTippedEvent(newPostTippedEvent) {

    console.log("New post tipped event:", newPostTippedEvent)
    const newPostTipped = {
        author: newPostTippedEvent.returnValues.author,
        description: newPostTippedEvent.returnValues.description,
        hash: newPostTippedEvent.returnValues.hash,
        id: newPostTippedEvent.returnValues.id,
        isVideo: newPostTippedEvent.returnValues.isVideo,
        tipAmount: newPostTippedEvent.returnValues.tipAmount
    }

    return newPostTipped

}