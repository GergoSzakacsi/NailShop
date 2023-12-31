import authService from '../services/auth-service';

export default {
  register(req, res, next) {
    const { email, password } = req.body;
    authService
      .register({ email, password })
      .then((user) => {
        res.send(user);
      })
      .catch((err) => next(err));
  },

  login(req, res, next) {
    const { email, password } = req.body;
    authService
      .login({ email, password })
      .then(({ accessToken }) => {
        res.send({ accessToken });
      })
      .catch(next);
  },

  // async loginAw(req, res, next) {
  //   const { email, password } = req.body;
  //
  //   try {
  //     const { accessToken } = await authService.login({ email, password });
  //     res.send({ accessToken });
  //   } catch (err) {
  //     next(err);
  //   }
  // },
};
