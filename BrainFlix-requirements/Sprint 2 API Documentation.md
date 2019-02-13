# BrainFlix API

## Gotchas
- Every "video" object has unique details but links to the same video
- You will be expected to display the correct video details in the player component even though the same video shows for each link
- The API comes seeded with a list of videos
  - Each seeded video starts with two comments
- The API may restart intermittently and forget all videos and comments that you have created

## Authentication
- Put the register URL in your browser bar to get an API key
  - `https://project-2-api.herokuapp.com/register`
- Append the returned API key to each of your requests to the API
- Example registration
```
https://project-2-api.herokuapp.com/videos?api_key=<your_api_key>
```

## Errors
- This API may return a 400 or 404 error
- Example error body
```
{
  "message": "No video with that id exists"
}
```

## URL
```https://project-2-api.herokuapp.com```

## Endpoints

### GET `/videos`
- Gets an array of video objects
- Contains only enough information to display in side bar
- Response body example
```
[
  {
      "id": 0,
      "title": "Toronto Blue Jays vs Boston Red Sox Highlights || July 14, 2018",
      "channel": "MLB",
      "views": "14934",
      "duration": "11:31",
      "image": "https://i.imgur.com/3WPEmCJ.jpeg"
  },
  {
      "id": 1,
      "title": "Boston Red Sox vs Toronto Blue Jays - FULL HIGHLIGHTS - MLB - 7/15/2018",
      "channel": "MLB",
      "views": "11348",
      "duration": "11:40",
      "image": "https://i.imgur.com/93GdUxA.jpeg"
  }
]
```

### GET `/videos/:id`
- `:id` must be swapped out with the numeric id of a video as found in the list of videos
- Gets the complete details of a single video
- Details include the list of comments for that video
- Example response body
```
{
    "id": 0,
    "title": "Toronto Blue Jays vs Boston Red Sox Highlights || July 14, 2018",
    "description": "The Red Sox looked like they were about to lose this one, trailing by a run heading into the 9th, but back-to-back doubles by Xander Bogaerts and Jackie Bradley Jr. tied the game at 2 a piece. While Boston couldn't end it in the 9th, the 10th was a different story. Mookie Betts reached on an error by Lourdes Gurriel Jr., and after a single by Brock Holt and an intentional walk to JD Martinez, the stage was set for Bogaerts with the bases loaded. He took full advantage of the situation, hitting a grand slam to walk it off for the Red Sox, and to take the game by a final score of 6-2.",
    "channel": "MLB",
    "views": "14934",
    "duration": "11:31",
    "image": "https://i.imgur.com/3WPEmCJ.jpeg",
    "video": "https://project-2-api.herokuapp.com/stream",
    "thumbsUp": 78634,
    "thumbsDown": 213,
    "subscriberCount": "1.2M",
    "comments": [
        {
            "name": "Nigel",
            "comment": "Never gonna give you up...",
            "id": 0,
            "timestamp": 1530744338878
        },
        {
            "name": "Ian",
            "comment": "You could make $5000 a day too!",
            "id": 1,
            "timestamp": 1530744338878
        }
    ]
}
```

# The following endpoints are not required to satisfy the requirements of sprint 2

### POST `/videos/:id/comment`
- `:id` must be swapped out with the numeric id of a video as found in the list of videos
- Creates a new comment for a specific video
- Post body example
```
{
	"name": "Nigel",
	"comment": "This is a test"
}
```
- response body example
```
{
  "name": "Nigel",
  "comment": "This is a test",
  "id": 4,
  "timestamp": 1531857374673
}
```

### DELETE `/videos/:videoId/comments/:commentId`
- Deletes the given comment and returns it in the response body
- `:videoId` must be swapped out with the numeric id of a video as found in the list of videos
- `:commentId` must be swapped out with the numeric id of a comment as found in the list of comments for the given video
- **this endpoint is not mandatory**. It is present for those interested in clearing out comments or going beyond the assignment requirements
- Response body example
```
{
    "name": "Ian",
    "comment": "You could make $5000 a day too!",
    "id": 1,
    "timestamp": 1530744338878
}
```
