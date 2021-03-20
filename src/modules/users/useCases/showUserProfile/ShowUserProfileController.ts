import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = <{ user_id: string }>request.params;

      const showUser = this.showUserProfileUseCase.execute({ user_id });

      return response.json(showUser);
    } catch (error) {
      return response.status(404).json({ error: "User does not exists!" });
    }
  }
}

export { ShowUserProfileController };
