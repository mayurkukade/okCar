
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 38,
  border: "1px solid green",
  margin: 6,
  padding: 8,
  margintop : 20,
  width : "500px"
};

const InfiniteScrolls = () => {
  const [items, setItems] = useState(Array.from({ length: 10 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (items.length >= 100) {
      setHasMore(false);
      return;
    }

    // Fake async API call: Add 20 more records after 0.5 seconds
    setTimeout(() => {
      setItems((prevItems) => prevItems.concat(Array.from({ length: 10 })));
    }, 1500);
  };
  
  return (
    <div>
    
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
        
        {items.map((_, count) => (
          <div style={style} >
           Number = {count}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrolls;