#!bin/bash
exists="$(pgrep nodejs | wc -w)"
if [ "$exists" -eq "0" ]
	then
		 mail -s "Personal website is down, attempting to restart" omaxwellanderson@gmail.com <<< "Nodejs has stopped, attempting to restart server. Please check status manually to ensure correct reboot."
		 cd /var/www/html/personal-site
		 nodejs app.js
fi


