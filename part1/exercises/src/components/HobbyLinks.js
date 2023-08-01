export default function HobbyLinks() {
    let hobbyLinks = ["https://www.goodreads.com/", "https://sallysbakingaddiction.com/"];
    return(
        <div>
            <h3>My Hobbies</h3>
            <a href = {hobbyLinks[0]} target = "blank">GoodReads</a> <br></br>
            <a href = {hobbyLinks[1]} target ="blank">Sally's Baking Addiction</a>
        </div>
    );
}
