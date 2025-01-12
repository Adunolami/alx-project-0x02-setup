// interfaces/index.ts

export interface CardProps {
    title: string;
    content: string;
  }
  
  export interface PostProps extends CardProps {
    userId: number;
  }  