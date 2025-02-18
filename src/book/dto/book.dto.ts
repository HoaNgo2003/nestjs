import { User } from "../../auth/schemas/user.schema"
import { Category } from "../schemas/book.schema"

export class CreateBookDto{
  readonly title: string
  readonly description: string
  readonly author: string
  readonly price: number
  readonly category: Category
  readonly user: User
}