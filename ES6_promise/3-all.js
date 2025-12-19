import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
    // Promise.all prend un tableau des fonctions appelées
    return Promise.all([uploadPhoto(), createUser()])
        .then((results) => {
            // results est un tableau : [résultat_de_photo, résultat_de_user]
            const photo = results[0];
            const user = results[1];

            // On affiche les propriétés demandées sur une seule ligne
            console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
        })
        .catch(() => {
            // En cas d'erreur sur n'importe laquelle des promises
            console.log('Signup system offline');
        });
}
