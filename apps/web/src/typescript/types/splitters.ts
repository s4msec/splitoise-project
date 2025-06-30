type Splitter = {
    id: number;
    uuid: string;
    projectId: number;
    categoryId: number;
    countryId: number;
    category: {
      id: number;
      name: string;
      description: string;
    };
    country: {
      id: number;
      icon: string | null; // Ensure `null` is allowed
      name: string;
      redirectMessage: string;
    };
  };
  

type Split = {
    id: number;
    splitterId: number;
    whichSplitIs: number;
};
