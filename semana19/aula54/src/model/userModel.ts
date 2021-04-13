export enum role {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

export type userType = 
{
  id?: string,
	name: string,
	email: string,
	password: string,
	role: role
}

