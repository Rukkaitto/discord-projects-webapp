export interface Member {
  _id: string;
  username: string;
  avatar: string;
}

export interface Project {
  _id: string;
  title: string;
  members: Member[];
}

export interface Server {
  _id: string;
  icon: string;
  name: string;
}
