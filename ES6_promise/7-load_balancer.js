export default function loadBalancer(chinaDownload, USDownload) {
  // Promise.race renvoie le résultat de la promise la plus rapide
  return Promise.race([chinaDownload, USDownload]);
}
