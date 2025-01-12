export interface CardProps {
    title: string;
    content: string;
  }
  
  export interface UserProps {
    name: string;
    email: string;
    address: {
      street: string;
      city: string;
      zipcode: string;
    };
  }
  
  export interface PostProps extends CardProps {
    userId: number; // Required field
  }  