from . import views
from django.urls import path
from College_Store import settings
from django.conf.urls.static import static
app_name='store'

urlpatterns = [
    path('',views.operation,name='operation'),
    path('logout',views.logout,name='logout'),
    path('submit',views.submit,name='submit'),
]
if settings.DEBUG:
    urlpatterns+=static(settings.STATIC_URL,
                        document_root=settings.STATIC_ROOT)
    urlpatterns+=static(settings.MEDIA_URL,
                        document_root=settings.MEDIA_ROOT)