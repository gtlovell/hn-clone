import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services';
import { Story } from '../components';
import { useInfiniteScroll } from '../hooks';
import {
  GlobalStyle,
  StoriesContainerWrapper
} from '../styles/StoriesContainerStyles';

export const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-testid="stories-container">
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};
