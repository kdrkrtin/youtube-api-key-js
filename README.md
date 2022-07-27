# Youtube API Key Project with JavaScript

I used [jQuery](https://jquery.com/) for this project.

You should be have Youtube API Key for this project.

Please watch this video for Youtube API Key: [How to get YouTube API Key](https://www.youtube.com/watch?v=N18czV5tj5o&ab_channel=WebbyFan.com)

After being generate YouTube API Key, create new file data.js. Later create ***apiKey*** and ***ytpVideos*** variables. Add your YouTube API Key and ids of YouTube videos. You sholud export your apiKey variable.

Example:

```javascript
# data.js

export const apiKey = 'YOUR-YOUTUBE-API-KEY'

```

You created data.js file. Now, you import this file to main.js file and add to a variable.

Example:

```javascript
# main.js

import { apiKey } from './data.js'

$(document).ready(function(){
    const key = apiKey;
    ...
})

```

Now, you should select youtube videos. Get a id for youtube video.

Example: https://www.youtube.com/watch?v=1dMskq-GxV4 Youtube video ID is ***1dMskq-GxV4*** for this link.

Like that a lot of videos can be select. Your youtube videos ID's should be ***Array***.

```
const ytpVideos = ['LZoJ98XW9AQ','l3Lgx-buzqs','6onuWUeaMxc','X9awI3UPhK4','NGz9jol8kTk']
```

As at the top.

You create a variable in data.js file and add to youtube videos ID's define as Array.

```javascript
# data.js

export const ytpVideos = ['Yotube Video ID 1', 'Yotube Video ID 2', 'Yotube Video ID 3']

```

and import to main.js file.

```javascript
# main.js

import { apiKey, ytpVideos } from './data.js'

$(document).ready(function(){
    const key = apiKey;
    const data = ytpVideos;
    ...
})

```

Let's create our options object and URL.

```javascript
# main.js

$(document).ready(function(){
    ...
    const url = 'https://www.googleapis.com/youtube/v3/videos';
    var options = {
        part: 'snippet',
        key,
    }
})

```

Ready now our key, videos and options object. Now let's make a request for videos from youtube.

```javascript
# main.js

for (let i = 0; i < idList.length; i++) {
    options.id = idList[i];
    $.getJSON(url, options, function (data) {
        console.log(data)
    });
}

```

We used for loop in here. Because it should be ID for out option object. We added at every loop and make a request. Look at the console for response. Now we have data of youtube videos. If you want you can check this data.

You have the rest. You can use this data as you wish.