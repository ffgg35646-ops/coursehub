import { User } from "lucide-react";

import type { User as UserType } from "@/types";

interface ProfileCardProps {
  user: UserType;
}

function ProfileCard({
  user,
}: ProfileCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">

      <div className="flex items-center gap-4">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            <User
              size={32}
              className="text-blue-600"
            />
          )}
        </div>


        <div>
          <h2 className="text-xl font-bold text-gray-900">
            {user.name}
          </h2>

          <p className="text-sm text-gray-500">
            {user.email}
          </p>
        </div>

      </div>


      <div className="mt-6 grid gap-4 border-t pt-5 sm:grid-cols-2">

        <div>
          <p className="text-sm text-gray-500">
            Role
          </p>

          <p className="font-medium capitalize">
            {user.role}
          </p>
        </div>


        <div>
          <p className="text-sm text-gray-500">
            Joined
          </p>

          <p className="font-medium">
            {user.createdAt || "Recently"}
          </p>
        </div>

      </div>

    </div>
  );
}

export default ProfileCard;
