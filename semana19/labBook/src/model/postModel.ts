export enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event",
}

export type postType = {
  id?: string;
  photo: string;
  description: string;
  type: POST_TYPES;
  createdAt: string;
  authorId: string;
};

