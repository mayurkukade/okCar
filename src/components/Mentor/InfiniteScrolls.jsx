
// import React, { useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";

// const style = {
//   height: 38,
//   border: "1px solid green",
//   margin: 6,
//   padding: 8,
//   margintop : 20,
//   width : "500px"
// };

// const InfiniteScrolls = () => {
//   const [items, setItems] = useState(Array.from({ length: 10 }));
//   const [hasMore, setHasMore] = useState(true);

//   const fetchMoreData = () => {
//     if (items.length >= 100) {
//       setHasMore(false);
//       return;
//     }

//     // Fake async API call: Add 20 more records after 0.5 seconds
//     setTimeout(() => {
//       setItems((prevItems) => prevItems.concat(Array.from({ length: 10 })));
//     }, 1500);
//   };
  
//   return (
//     <div>
    
//         <InfiniteScroll
//         dataLength={items.length}
//         next={fetchMoreData}
//         hasMore={hasMore}
//         loader={<h4>Loading...</h4>}
//         endMessage={
//           <p style={{ textAlign: "center" }}>
//             <b>You are at last</b>
//           </p>
//         }
//       >
        
//         {items.map((_, count) => (
//           <div style={style} >
//            Number = {count}
//           </div>
//         ))}
//       </InfiniteScroll>
//     </div>
//   );
// };

// export default InfiniteScrolls;

import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const InfiniteScrolls = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products?offset=10&limit=12")
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  const fetchData = () => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products?offset=${index}0&limit=12`)
      .then((res) => {
        setItems((prevItems) => [...prevItems, ...res.data]);
        res.data.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => console.log(err));

    setIndex((prevIndex) => prevIndex + 1);
  };


  const fetchMoreData = () => {
    // Add a delay using setTimeout
    setTimeout(() => {
      fetchData();
    }, 1500); 
  };
  

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>You are at last</b>
                  </p>
                }
    >
      <div className='container'>
        <div className='row'>
          {items &&
            items.map((item) => (
              <div key={item.id} >
              <h2>{item.title}</h2>
              <p>Price: {item.price}</p>
              <p>Description: {item.description}</p>
              <img src={item.image} alt={item.title} style={{ maxWidth: "200px", maxHeight: "200px" }} />
              <p>Category: {item.category.name}</p>
              <p>Created at: {item.creationAt}</p>
              <p>Updated at: {item.updatedAt}</p>
          </div>
            ))
            }
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default InfiniteScrolls;