function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // pop value from stack
    const next = stack.pop();
    if (Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  //reverse to restore input order
  return res.reverse();
}

// Return flat array of stories and include the location as a key on each story
// order by score, ascending (most negative stories first)
export function transformStoryData(storyData) {
  const {stories} = storyData;
  const flatStories = [];
  Object.keys(stories).forEach((k) => {
    flatten(stories[k]).forEach((story) => {
      const modifiedStory = Object.assign({}, story, {location: k})
      flatStories.push(modifiedStory)
    })
  })
  const sortedFlatStories = 
    flatStories.sort((a, b) => {
      if (a.score < b.score) {
        return -1;
      }
      if (a.score > b.score) {
        return 1;
      }
      return 0;
    })
  return sortedFlatStories;
}