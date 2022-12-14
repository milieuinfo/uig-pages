import { buildVersionFolders, Folder, writeYmlFile } from '@domg-lib/version-processing';
import * as YAML from 'yaml';

const versionFolders: Folder[] = buildVersionFolders(
    '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-pages/build-apps'
);
writeYmlFile(versionFolders, '/Users/krisspeltincx/Ontwikkeling/OMG/github/uig-pages/jekyll/_data/versions.yml');
console.log(YAML.stringify(versionFolders));
