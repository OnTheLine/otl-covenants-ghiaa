# otl-covenants
Leaflet map of race restrictive covenants in property deeds in Connecticut, 1930s-40s

## Demo with caption
https://ontheline.github.io/otl-covenants/index-caption.html

## Embedded in two sites
- https://ontheline.trincoll.edu
- https://myCTdeed.com

## Data
- map.geojson -- spatial data joined with contents of table below, stored in this GitHub
- otl-covenants-table -- working copy of data in Google Sheet https://docs.google.com/spreadsheets/d/1yLGLmTzrkiaVJENkbWISFTSfH-Gm569UD-O206kPSFo/edit#gid=322703715, with backup XLSX in this GitHub repo
- table-ct-land-records-online -- working copy in Google Sheet https://docs.google.com/spreadsheets/d/1t6UFa-y7HmiulmLxydlfXevpquFRF5JZD7OsBxdq0R4/edit#gid=0 and backup CSV in this GitHub repo

## Credits
- Property deed research in Connecticut towns:
  - Katie Campbell: West Hartford, Summer 2010
  - David K. Ware: Manchester (see “The Black and White of Greenway: Racially Restrictive Covenants in Manchester, Connecticut,” 2020, https://ssrn.com/abstract=3546228), Newington 2023, East Haddam 2024
  - June Gold: Hamden, 2023-24; Woodbridge 2024
- Leaflet map by Ilya Ilyakou and Jack Dougherty, which replaces the 2012 UConn MAGIC Google Map http://magic.lib.uconn.edu/otl/doclink_covenant.html
- If you know of other restrictive covenants by race or religion, anywhere in Connecticut, contact the author [jack.dougherty@trincoll.edu](mailto:jack.dougherty@trincoll.edu)

## How to update:
- Overview: draw in GeoJson.io, data entry in Google Sheet, join in MapShaper, republish in Datawrapper, save to GitHub
- Scan historical documents, add metadata, and upload to `pdf` GitHub folder using id format
- to draw new polygons, upload to geojson.io, draw and name id, then export
- to enter new data, go to data in Google Sheet; avoid empty rows at bottom for cleaner pivot table
- download data as CSV
- upload existing map.geojson to mapshaper.org
- console: -filter-fields id   (to remove all fields except geospatial id)
- upload CSV and rename to 'data'
- console: -join data keys=id,id
- export with option: extension='.geojson', upload to GitHub
- save XLSX backup to https://github.com/ontheline/otl-covenants
- Republish two linked Datawrapper tables in OTL Team folder
- Racist Covenants Located To Date by Connecticut Town https://app.datawrapper.de/archive/team/Fj3ATkF7/63725#/dCnch
- Search by Street Name for CT Racist Covenants https://app.datawrapper.de/archive/team/Fj3ATkF7/63725#/j4lCy
- Live map and two tables appears on live sites: https://myCTdeed.com and (only map and main table in book) https://ontheline.trincoll.edu/restricting.html

## Unresolved 1923 Jacob Bauer property in East Hampton CT
- 15 Sept 1923 deed from Jacob Bauer to Leo J. Hedrick, v46 p511, Town of East Hampton CT includes an anti-Jewish restriction: “The said premises shall not be conveyed or leased to any person of the jewish race or extraction.” The “land with a bungalow” is described with these boundaries:
  - Northerly by land of grantor (Bauer) 250 feet
  - Easterly by highway and Lake Pocotopaug, 50 feet
  - Southerly by land of the grantor (Bauer) 250 feet
  - Westerly by land of the grantor (Bauer) 50 feet
- Unresolved problem: Since I cannot confidently link this 1923 Jacob Bauer property to a specific land parcel on the 1927 Bauer Terrace map (or a more recent map), we can only archive it in the otl-covenants repository and write about its existence, but we cannot definitively *map* it. While I *believe* the best possible match is 1927 map lot #25, known today as parcels 12B and 13B on the current East Hampton GIS tax map, a vacant lot with the address 83 North Main St. But land records for the 1923 Bauer property are unclear after November 1925, so cannot definitively link Bauer ownership to 1927 lot #25.
- See details in pdf folder > easthampton_holder_jacob.pdf   

### Additional leads to follow up on
see working Google Sheet https://docs.google.com/spreadsheets/d/1RtxNexc0S8gZyZVimdwM0FO-kq8xPw3HMaP2Ku5a8KI/edit#gid=0
