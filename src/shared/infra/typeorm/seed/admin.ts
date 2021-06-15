import { v4 as uuidV4 } from 'uuid';
import { hash } from "bcrypt";

import createConnection from "../index";

async function create() {
  const connection = await createConnection();

  const id = uuidV4();
  const password = await hash("testAdmin", 8);

  await connection.query(
    `INSERT INTO users(id, name, email, password, "isAdmin", created_at, driver_license)
     VALUES('${id}', 'testAdmin', 'testAdmin@email.com', '${password}', true, 'now()', 'asdfijhasdfo')
    `
  )

  await connection.close();

}