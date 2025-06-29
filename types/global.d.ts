declare global {
  interface Window {
    beehiiv?: {
      init: (config: {
        publicationId: string;
        container: string;
        theme?: string;
      }) => void;
    };
  }
}

export {}; 