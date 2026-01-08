export interface Tenant {
  id: string;
  name: string;
  adminEmail: string;
  usersCount: number;
  storageUsed: string;
  plan: "Starter" | "Enterprise";
}
