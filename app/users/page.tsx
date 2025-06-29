import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import React from 'react'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey: string = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
const supabase = createClient(supabaseUrl, supabaseKey)

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {

let { data: users_tutorial_app, error } = await supabase
.from('users_tutorial_app')
.select('*')


  return (
    <div className="p-10">
      <h1 className="text-5xl font-bold mb-10">Users</h1>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-200">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
          <tbody>
            {users_tutorial_app?.map((user: User) => (
              <tr key={user.id} className="hover:bg-base-300">
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="flex justify-end">
                  <Pencil1Icon className="btn btn-ghost btn-xs" />
                  <TrashIcon className="btn btn-ghost btn-xs" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsersPage