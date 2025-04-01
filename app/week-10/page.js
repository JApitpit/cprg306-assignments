"use client";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    const handleSignIn = async () => {
        try {
          await gitHubSignIn();
        } catch (error) {
          console.error("Error signing in:", error);
        }
      };
    
      const handleSignOut = async () => {
        try {
          await firebaseSignOut();
        } catch (error) {
          console.error("Error signing out:", error);
        }
      };
    
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          {!user ? (
            <div>
              <h1 className="text-2xl font-bold mb-4">Welcome to the Shopping List App</h1>
              <button
                onClick={handleSignIn}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Sign in with GitHub
              </button>
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-bold mb-4">Welcome, {user.displayName}!</h1>
              <p className="mb-4">Email: {user.email}</p>
              <div className="flex gap-4">
                <Link href="/week-9/shopping-list" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                  Go to Shopping List
                </Link>
                <button
                  onClick={handleSignOut}
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      );
    }
    