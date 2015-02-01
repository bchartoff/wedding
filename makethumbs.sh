#!/bin/bash
for file in /Users/bchartoff/wedding/gallery/*.jpg; do
	# echo "$file"
	filename=${file%.*}.thumbnail.jpg;
	convert "$file" -resize "120x120^" -gravity center -crop 120x120+0+0 +repage "$filename";
done
