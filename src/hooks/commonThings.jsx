
/**
 * O objetivo desta função é extrair o ID de um vídeo do YouTube a partir de uma URL.
 * 
 * @param {string} url - A URL do vídeo do YouTube.
 * @returns {string} O ID do vídeo ou uma mensagem de erro em caso de URL inválida.
 */
const commonThings = () => {
  
  function extractVideoID(url) {
    // Verifica se a URL começa com "http"
    if (url.startsWith('http')) {
      // Expressão regular para extrair o ID do vídeo do YouTube
      const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      // Aplica a expressão regular na URL
      const match = url.match(regex);
      // Verifica se o ID do vídeo é válido (11 caracteres) e retorna o ID, caso contrário, retorna uma mensagem de erro
      return match && match[1].length === 11 ? match[1] : 'Link inválido';
    }
    // Se a URL não começar com "http", retorna a própria URL
    return url;
  }

  return { extractVideoID };
};

export default commonThings;

