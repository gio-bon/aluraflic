
const commonThings = () => {
  
  function extractVideoID(url) {
    if (url.startsWith('http')) {
      const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const match = url.match(regex);
      return match && match[1].length === 11 ? match[1] : 'Link inválido';
    }
    return url;
  }

  return { extractVideoID };
};

export default commonThings;
