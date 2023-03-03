export default interface Post {
  id: number;
  title: string;
  body: string;
  userId?: number;
  reactions?: number;
  tags?: string[];
}
