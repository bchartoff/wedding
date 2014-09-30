#!/bin/bash
for file in /Users/bchartoff/wedding/gallery; do
	echo "$file"
	#convert "$file" -resize "200x200^" -gravity center -crop 200x200+0+0 +repage thumbnail."$file";
done
