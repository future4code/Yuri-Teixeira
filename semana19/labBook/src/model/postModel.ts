export interface IPostType {
  id: string;
  photo: string;
  description: string;
  type: "normal" | "event";
  createdAt: string;
  authorId: string;
}

export interface IInputPostDTO {
  photo: string;
  description: string;
  type: "normal" | "event";
}
