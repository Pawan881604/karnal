import { apiUrl } from "@/state/categorieApi";
import { notFound } from "next/navigation";

export async function fetchData(path: string): Promise<any> {
  try {
    const response = await fetch(`${apiUrl}/v2/${path}`, {
      next: { revalidate: 3600 },
    });

    if (response.status === 404) notFound();
    if (!response.ok)
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
