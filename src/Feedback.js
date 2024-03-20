import React, { useState } from "react";
import { Container, TextField } from "@mui/material";
import "./feedback.css";
import videoBackground from "./assets/common_background.mp4";
import Search from "./components/Search/Search";
import "./Feedback.css";
const feedData = [
  {
    username: "Sukhvindar singh ",
    handle: "@amar",
    profilepic: "https://i.pinimg.com/564x/f6/a5/33/f6a533f835f4189fa1a639f21de067c9.jpg",
    date: "Jun 27",
    content: `Ludhiana: Mangat residents irked as PPCB delays release of water sample results: The delay in releasing the results of the water sample collected from Mangat village to check pollution by the Punjab Pollution Control Board have left the residents agitated. `,
    imageSrc:
      "https://www.hindustantimes.com/ht-img/img/2024/01/16/550x309/In-response-to-December-s-protest-by-Mangat-villag_1705431069131.jpg",
    comments: 33,
    retweets: 397,
    likes: 2600,
  },
  {
    username: "Radiant",
    handle: "@radiant.ai",
    profilepic: "https://i.pinimg.com/564x/f6/a5/33/f6a533f835f4189fa1a639f21de067c9.jpg",
    date: "Jun 27",
    content: `The air quality in the national capital remained "very poor" for the second consecutive day. The overall Air Quality Index (AQI) touched 309 on Monday morning, according to data from the System of Air Quality and Weather Forecasting And Research (SAFAR).

    In Dhirpur, the AQI plunged into a "severe" category at 348.
    `,
    imageSrc:
      "https://s.w-x.co/util/image/w/in-air_pollution%281%29.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60",
    comments: 33,
    retweets: 397,
    likes: 2600,
  },
  {
    username: "Amit Sani",
    handle: "@amit_soni123",
    profilepic: "https://i.pinimg.com/564x/e2/3e/8a/e23e8a156e2d2fc9a5d57d095801ab28.jpg",
    date: "Jun 27",
    content:
      "As of 3 a.m. local time on Saturday, it has been revealed that the Jajarkot and West Rukum districts have experienced the most significant damage, with Jajarkot alone recording at least 92 deaths. Deputy Superintendent of Police of Jajarkot district, Santosh Roka, provided this information, as reported by The Kathmandu Post.",
    imageSrc: "https://s.w-x.co/util/image/w/in-earthquake_10.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60",
    comments: 33,
    retweets: 397,
    likes: 2600,
  },
  {
    username: "Tanya",
    handle: "@tanya_radiant",
    profilepic: "http://m.gettywallpapers.com/wp-content/uploads/2023/07/Mirror-Selfi-Girl-Pfp.jpg",
    date: "Jun 27",
    content: `As the country's financial capital gasps for breath and grapples with very poor air quality, four out of five Mumbai families have at least one person suffering from sore throat, cough, and burning eyes. The Bombay High Court has taken suo motu cognizance of air pollution levels in the city, banning firecrackers for the ODI World Cup matches. Meanwhile, civic authorities are cracking down on air pollution "creators" and taking up the task of washing all major roads (60 feet wide) in the city.This situation of air pollution has persisted since the end of the monsoon and the early winter in October. As Mumbaikars choke, the Brihanmumbai Municipal Corporation (BMC) has awakened to the fact that over 6,000 construction sites in Mumbai are the prime polluters. On October 20, the BMC ordered a series of measures to control this, including the use of anti-smog guns, sprinklers at building sites, special squads to catch violators, and the daily cleaning of 650 kilometres of all major roads with recycled water.`,
    imageSrc:
      "https://s.w-x.co/util/image/w/in-mumbai%20pollution.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60",
    comments: 33,
    retweets: 397,
    likes: 2600,
  },
  {
    username: "Kamya",
    handle: "@kamya_radiant",
    profilepic: "http://m.gettywallpapers.com/wp-content/uploads/2023/07/Mirror-Selfi-Girl-Pfp.jpg",
    date: "Jun 27",
    content: ` 
    Delhi: Polluted Yamuna river to disrupt water supply as ammonia level soars. Delhi Jal Board reported a high level of pollutants in the Yamuna river at the Wazirabad pond which has led to a reduction in water production by 25-30 per cent at the Wazirabad and Chandrawal treatment plants.`,
    imageSrc:
      "https://www.livemint.com/lm-img/img/2023/12/26/600x338/DJB-faces-the-problem-of-high-ammonia-level-in-Yam_1703574628606_1703574640955.jpg",
    comments: 33,
    retweets: 397,
    likes: 2600,
  },
  {
    username: "Amit Sani",
    handle: "@amit_soni123",
    profilepic: "https://i.pinimg.com/564x/e2/3e/8a/e23e8a156e2d2fc9a5d57d095801ab28.jpg",
    date: "Jun 27",
    content:
      "As of 3 a.m. local time on Saturday, it has been revealed that the Jajarkot and West Rukum districts have experienced the most significant damage, with Jajarkot alone recording at least 92 deaths. Deputy Superintendent of Police of Jajarkot district, Santosh Roka, provided this information, as reported by The Kathmandu Post.",
    imageSrc: "https://s.w-x.co/util/image/w/img_0837.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60",
    comments: 33,
    retweets: 397,
    likes: 2600,
  },

  // Add more data objects for additional feed cards
];

const FeedCard = ({ data }) => {
  return (
    <>
      <div className="tweet-wrap">
        <div className="tweet-header">
          <img src={data.profilepic} alt="" className="avator" />
          <div className="tweet-header-info">
            <span>{data.username} </span>
            <span>{data.handle}</span>
            <span>. {data.date}</span>
            <p>{data.content}</p>
          </div>
        </div>
        <div className="tweet-img-wrap">
          <img src={data.imageSrc} alt="" className="tweet-img" />
        </div>
        <div className="tweet-info-counts">
          <div className="comments">
            <svg
              className="feather feather-message-circle sc-dnqmqq jxshSx"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <div className="comment-count">{data.comments}</div>
          </div>
          <div className="retweets">
            <svg
              className="feather feather-repeat sc-dnqmqq jxshSx"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <polyline points="17 1 21 5 17 9"></polyline>
              <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
              <polyline points="7 23 3 19 7 15"></polyline>
              <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
            </svg>
            <div className="retweet-count">{data.retweets}</div>
          </div>
          <div className="likes">
            <svg
              className="feather feather-heart sc-dnqmqq jxshSx"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <div className="likes-count">{data.likes}</div>
          </div>
          <div className="message">
            <svg
              className="feather feather-send sc-dnqmqq jxshSx"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

const Feed = () => {
  const [feedPost, setFeedPost] = useState(feedData);
  const [newPost, setNewPost] = useState("");
  const [image, setImage] = useState(null); // State to hold the uploaded image

  function handleImageUpload(e) {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  }

  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    const currentDate = new Date().toDateString(); // Get the current date
    const newData = {
      // Create a new object for the submitted post
      username: "Your Name",
      handle: "@your_handle",
      profilepic: "https://i.pinimg.com/564x/f6/a5/33/f6a533f835f4189fa1a639f21de067c9.jpg",
      date: currentDate,
      content: newPost,
      imageSrc:
        // "https://s.w-x.co/util/image/w/in-air_pollution%281%29.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60",
        image ? URL.createObjectURL(image) : null,
      comments: 33,
      retweets: 397,
      likes: 2600,
      // Add default values for other fields like imageSrc, comments, retweets, likes if needed
    };
    setFeedPost((prevFeed) => [newData, ...prevFeed]); // Add the new post to the beginning of the feed
    console.log(feedPost);

    setNewPost(""); // Clear the input field after submission
    // parse.  push()
  }
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={videoBackground} type="video/mp4" />
      </video>

      <Container
        sx={{
          maxWidth: { xs: "95%", sm: "80%", md: "1100px" },
          width: "100%",
          height: "100%",
          margin: "0 auto",
          padding: "1rem 0 3rem",
          marginBottom: "1rem",
          borderRadius: {
            xs: "none",
            sm: "0 0 1rem 1rem",
          },
          boxShadow: {
            xs: "none",
            sm: "rgba(0,0,0, 0.5) 0px 10px 15px -3px, rgba(0,0,0, 0.5) 0px 4px 6px -2px",
          },
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            label="Post an issue near your locality  "
            variant="standard"
            className="text"
            onChange={(e) => setNewPost(e.target.value)} // Update the state with user input
            value={newPost}
            // value={feedPost}
          />
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <button className="button-1" type="submit">
            Submit
          </button>
        </form>

        {feedPost.map((data, index) => (
          <FeedCard key={index} data={data} fullWidth="" />
        ))}
      </Container>
    </div>
  );
};

export default Feed;
