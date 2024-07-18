# P2P Collections List

This repo contains the list of p2p collections supported by the jpegd frontend.

## Installation

Run the following command :

- `yarn`

## PR Guidelines

Instructions to Follow when adding a collection:

- Collection key must be in all caps, eg: CRYPTOPUNKS
- The collection logo must be added to the `logos` folder, in png format and 240x240 pixels. Its name must be the same as the collection key. eg: CRYPTOPUNKS.png
- The collection should then be added to `collections.json` with the following format :

      {
              address: string
              label: string
              key: string
              imageBaseUrl: string
              logoUrl: https://github.com/jpegd/p2p-collection-list/blob/main/logos/<key>.png?raw=true
              isERC721: true
              osSlug?: string
              blurSlug?: string
              ext?: string
            }
