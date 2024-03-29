import { Router } from 'express';
import User from '~/models/User';
import { auth } from '~/middleware/AuthenticateMiddleware';

const router = Router();

/**
 * @openapi
 * /api/favorite:
 *  get:
 *      description: Retrieve the favorite location of connected user.
 *      responses:
 *          200:
 *              description: Returns list of string
 *          401:
 *              invalid credentials
 */
router.get('/', auth, async (req, res) => {
    if (typeof req.token === 'string') {
        return;
    }

    const email = req.token?.email;

    if (!email) {
        res.status(401).send({ message: 'invalid credentials' });
        return;
    }

    const user = await User.findByEmailOrUsername(email);

    if (!user) {
        res.status(401).send({ message: 'invalid credentials' });
        return;
    }

    res.status(200).send(user.favorites);
});

/**
 * @openapi
 * /api/favorite:
 *  post:
 *      description: set Favorite list in user.
 *      responses:
 *          200:
 *              description: Returns list of string
 *          401:
 *              invalid credentials
 */
router.post('/', auth, async (req, res) => {
    if (typeof req.token === 'string') {
        return;
    }

    const email = req.token?.email;

    if (!email) {
        res.status(401).send({ message: 'bad authentification' });
        return;
    }

    const user = await User.findByEmailOrUsername(email);

    if (!user) {
        res.status(401).send({ message: 'invalid credentials' });
        return;
    }

    user.favorites = req.body as string[];

    user.save()
        .then(() => {
            res.status(200).send({ message: user.toUserInformation() });
        })
        .catch(() => {
            res.status(403).send({ message: user.toUserInformation() });
        });
});

export default router;
