declare global {
  interface Window {
    beehiiv?: {
      init: (config: {
        publicationId: string;
        container: string;
        theme?: string;
        onSubscribe?: (email: string) => void;
      }) => void;
    };
  }
}

export {}; 