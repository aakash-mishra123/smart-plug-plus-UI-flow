import axios from "axios";
// import { DeviceStatusResponseType } from "./types/deviceStatusTypes";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const STATUS_SLUG = "v1/energy/chain-to-gate";
// const AUTH_TOKEN = process.env.NEXT_PUBLIC_DEVICE_AUTH_TOKEN;

export const FetchDeviceData = async () => {
  const url = `${BASE_URL}/${STATUS_SLUG}`;
  try {
    const { data } = await axios.get(url, {
      params: {},
      headers: {
        accept: "/",
        "Content-Type": "application/json",
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZFByZXNhRm9ybWlkYWJpbGUiOiIwMzY2ZDQ4My0zYjI2LTRjMGUtOTZkZS1lZjRlNWNkOWYyMzAiLCJpc3MiOiJBUFAiLCJleHAiOjE3NDE2ODg5OTR9.Bste60xcPzeVwDwSC54xr8XuoXhc2qB7AhC-9M9G6ZfrWkZd8qGMfYiVqomk3DR37_-XlagqoDgvNjrSf2eDXAzkrXQH8ZVnJXz08aDhZjouZYMN_nv4QKo3eNek20mO9MsSjLNmn1MfPqKWYLwPMOCFo4O62LCs2mESexUAaSYPI-FWowtwWuWyOI_fs_7OQvGvKXyzhRNt9EBz1FzBvs5I1QSFXTyzm8pz8nyOPNiRbtSDrLcFiiS422Jv6P-SmD0rTxlbxfvZPYHosAEmq217Xg0SMp715kKrbxBAu6Y3wiRTWwnn92JXjJ_n3uH5oNHv9nCErcfBBKiGt81NnQ`,
      },
      withCredentials: true,
    });

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
      return;
    }
  }
};
