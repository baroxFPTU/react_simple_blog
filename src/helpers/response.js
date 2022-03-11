const transformArray = (response) => {
  if (!response) return [];

  if (typeof response === 'object') {
    const transformedArray = [];
    for (const key in response) {
      const newValue = {
        ...response[key],
        postId: key
      }
      transformedArray.push(newValue);
    }
    return transformedArray;
  }
}

export {
  transformArray
}