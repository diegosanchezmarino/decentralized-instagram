pragma solidity 0.8.11;

contract Decentragram {
    string public name = "Decentragram";
    uint256 public postCount = 0;
    mapping(uint256 => Post) public posts;

    struct Post {
        uint256 id;
        string hash;
        string description;
        uint256 tipAmount;
        address payable author;
    }

    event PostCreated(
        uint256 id,
        string hash,
        string description,
        address payable author
    );

    event PostTipped(
        uint256 id,
        string hash,
        string description,
        uint256 tipAmount,
        address payable author
    );

    function createPost(string memory _resourceHash, string memory _description)
        public
    {
        // Make sure the image hash exists
        require(bytes(_resourceHash).length > 0);
        // Make sure image description exists
        require(bytes(_description).length > 0);
        // Make sure uploader address exists
        require(msg.sender != address(0));

        // Increment post id
        postCount++;

        // Add Image to the contract
        posts[postCount] = Post(
            postCount,
            _resourceHash,
            _description,
            0,
            payable(msg.sender)
        );
        // Trigger an event
        emit PostCreated(
            postCount,
            _resourceHash,
            _description,
            payable(msg.sender)
        );
    }

    function tipPostOwner(uint256 _id) public payable {
        require(_id > 0 && _id <= postCount);

        Post memory _post = posts[_id];

        address payable _author = _post.author;

        _author.transfer(msg.value);

        _post.tipAmount = _post.tipAmount + msg.value;

        posts[_id] = _post;

        emit PostTipped(
            _id,
            _post.hash,
            _post.description,
            _post.tipAmount,
            _author
        );
    }
}
