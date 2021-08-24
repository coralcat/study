from django.db import models


class Quicklink(models.Model):

    name = models.CharField(max_length=30)
    url = models.URLField('URL')
    description = models.CharField(max_length=60)

    # 이미지 업로드 기능 추가
    image = models.ImageField(upload_to='images/%Y%m%d', default='images/no_images.png')

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "사이트 이름: " + self.name + ", URL 주소: " + self.url

    class Meta:
        ordering: ['-updated']


